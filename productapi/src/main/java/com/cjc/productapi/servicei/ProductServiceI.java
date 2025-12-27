package com.cjc.productapi.servicei;

import java.util.List;

import com.cjc.productapi.model.Product;

public interface ProductServiceI {

	public void savedata(Product p);

	public void deleteProduct(int id);

	public Product getSingleProduct(int id);

	public List<Product> getProducts();

	public void updateProduct(Product p);
}
