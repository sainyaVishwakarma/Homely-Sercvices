package com.homely.homelyservices.service;

import java.util.List;

import com.homely.homelyservices.model.ServiceProvider;

public interface ServiceProviderService {
	
	public List<ServiceProvider> getAllServiceProvider();
	
	public ServiceProvider getServiceProviderById(Integer id);
	
	public ServiceProvider createServiceProvider(ServiceProvider serviceProvider);
	
	public ServiceProvider updateServiceProvider(Integer id,ServiceProvider serviceProvider);
	
	public String deleteServiceProvider(Integer id);

	public List<ServiceProvider> findBySpecialization(String specialization);

	
}
