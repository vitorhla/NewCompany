package com.newcompany.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newcompany.entities.Company;
import com.newcompany.repositories.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository repository;
	
	
public List<Company>findAll(){
	
	return repository.findAll();
	
}
	
	
	
}
