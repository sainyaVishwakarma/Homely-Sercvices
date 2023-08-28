package com.homely.homelyservices.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class ServiceProvider {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer serviceprovider_id;
    private String name;
    private String email;
	private String mobile;
	public String specialization;
	public ServiceProvider() {
		super();
	}
	public ServiceProvider(Integer serviceprovider_id, String name, String email, String mobile,
			String specialization) {
		super();
		this.serviceprovider_id = serviceprovider_id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.specialization = specialization;
	}
	public Integer getServiceprovider_id() {
		return serviceprovider_id;
	}
	public void setServiceprovider_id(Integer serviceprovider_id) {
		this.serviceprovider_id = serviceprovider_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	
	
	
	
	
    
    
}
