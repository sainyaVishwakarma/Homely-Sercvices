package com.homely.homelyservices.controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.homely.homelyservices.model.ServiceProvider;
import com.homely.homelyservices.service.ServiceProviderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ServiceProviderController {
	
	@Autowired
	private ServiceProviderService serviceProviderService;
	
	@GetMapping("/serviceprovider")
	public ResponseEntity<List<ServiceProvider>> getAllServiceProvider(){
		return new ResponseEntity<>(serviceProviderService.getAllServiceProvider(), HttpStatus.OK);
	}
	
	@GetMapping("/serviceprovider/{id}")
	public ResponseEntity<ServiceProvider> getServiceProviderById(Integer id){
		return new ResponseEntity<>(serviceProviderService.getServiceProviderById(id), HttpStatus.OK);
	}
	
	@PostMapping("/serviceprovider")
    public ResponseEntity<ServiceProvider> createServiceProvider(@RequestBody ServiceProvider serviceProvider) {
		return new ResponseEntity<>(serviceProviderService.createServiceProvider(serviceProvider), HttpStatus.CREATED);
    }
	
	@PutMapping("/serviceprovider/{id}")
    public ResponseEntity<ServiceProvider> updateServiceProvider(@PathVariable("id") Integer id, @RequestBody ServiceProvider serviceProvider) {
            return new ResponseEntity<>(serviceProviderService.updateServiceProvider(id,serviceProvider), HttpStatus.OK);
       
    }
	
	@DeleteMapping("/serviceprovider/{id}")
    public ResponseEntity<String> deleteServiceProvider(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(serviceProviderService.deleteServiceProvider(id), HttpStatus.OK);
    }
	
	
	 @GetMapping("/serviceprovider/bySpecialization")
	    public ResponseEntity<List<ServiceProvider>> getServiceProvidersBySpecialization(@RequestParam String specialization) {
	        List<ServiceProvider> serviceProviders = serviceProviderService.findBySpecialization(specialization);
	        return ResponseEntity.ok(serviceProviders);
	    }
	 
}
