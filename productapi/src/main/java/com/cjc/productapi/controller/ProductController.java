package com.cjc.productapi.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cjc.productapi.model.Product;
import com.cjc.productapi.servicei.ProductServiceI;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	ProductServiceI psi;

	@PostMapping // http://localhost:4000/products
	public ResponseEntity<?> saveProduct(@RequestParam("productName") String productName,
			@RequestParam("productPrice") double productPrice, @RequestParam("productCategory") String productCategory,
			@RequestParam("isAvailable") boolean isAvailable, @RequestParam("productImage") MultipartFile file)  throws IOException

	{
		Product p = new Product();
		p.setProductName(productName);
		p.setIsAvailable(isAvailable);
		p.setProductCategory(productCategory);
		p.setProductPrice(productPrice);
		p.setProductImage(file.getBytes());

		psi.savedata(p);
		return new ResponseEntity<>(HttpStatus.CREATED);//201
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getSingleProduct(@PathVariable("id") int id){
		
		Product p=psi.getSingleProduct(id);
		return new ResponseEntity<Product>(p,HttpStatus.OK);//200 + data
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> getProducts(){
		      List<Product> list=psi.getProducts();
		      
		return new ResponseEntity<List<Product>>(list,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable("id") int id){
		
		    psi.deleteProduct(id);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable("id") int id,@RequestParam("productName") String productName,
			@RequestParam("productPrice") double productPrice,
			@RequestParam("productCategory") String productCategory,
			@RequestParam("isAvailable") boolean isAvailable,
			@RequestParam("productImage") MultipartFile file) throws IOException
	{
		
		Product p=new Product();
		p.setProductName(productName);
		p.setIsAvailable(isAvailable);
		p.setProductCategory(productCategory);
		p.setProductPrice(productPrice);
		p.setProductImage(file.getBytes());
		p.setId(id);
		
		    psi.updateProduct(p);
		
		return new ResponseEntity<>(HttpStatus.OK);
}
	
}
