package com.cjc.productapi.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cjc.productapi.model.Product;
import com.cjc.productapi.repositoryi.ProductRepositoryI;
import com.cjc.productapi.servicei.ProductServiceI;

@Service
public class ProductServiceImpl implements ProductServiceI {
	
    @Autowired
	ProductRepositoryI pr;

	@Override
	public void savedata(Product p) {
		pr.save(p);
		
	}

	@Override
	public List<Product> getProducts() {
	
		return pr.findAll();
	}

	@Override
	public Product getSingleProduct(int id) {
		return pr.findById(id).get();
	}

	@Override
	public void deleteProduct(int id) {
		pr.deleteById(id);
		
	}

	@Override
	public void updateProduct(Product p) {
		pr.save(p);
	}

}
