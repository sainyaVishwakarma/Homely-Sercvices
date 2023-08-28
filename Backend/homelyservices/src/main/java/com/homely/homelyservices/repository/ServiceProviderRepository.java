package com.homely.homelyservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.homely.homelyservices.model.ServiceProvider;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider,Integer>{
	@Query(value="SELECT * FROM Service_Provider s WHERE s.specialization = :specialization", nativeQuery = true)
	List<ServiceProvider> findBySpecialization(@Param("specialization") String specialization);

	
	
}
