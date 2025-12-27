package com.cjc.productapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
private String productName;
private Double productPrice;
private String productCategory;
private Boolean isAvailable;
@Lob
private byte[] productImage;

public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public Double getProductPrice() {
	return productPrice;
}
public void setProductPrice(Double productPrice) {
	this.productPrice = productPrice;
}
public String getProductCategory() {
	return productCategory;
}
public void setProductCategory(String productCategory) {
	this.productCategory = productCategory;
}
public Boolean getIsAvailable() {
	return isAvailable;
}
public void setIsAvailable(Boolean isAvailable) {
	this.isAvailable = isAvailable;
}
public byte[] getProductImage() {
	return productImage;
}
public void setProductImage(byte[] productImage) {
	this.productImage = productImage;
}



}
