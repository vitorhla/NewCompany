package com.newcompany.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.newcompany.dto.CompanyDTO;
import com.newcompany.entities.Company;
import com.newcompany.repositories.CompanyRepository;
import com.newcompany.services.exceptions.ControllerNotFoundException;

@Service
public class CompanyService {

	@Autowired
	private CompanyRepository repository;

	@Transactional(readOnly = true)
	public List<CompanyDTO> findAll() {
		List<Company> list = repository.findAll();
		return list.stream().map(x -> new CompanyDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public CompanyDTO findByIdCompany(Long id) {
		Optional<Company> obj =  repository.findById(id);
		Company entity = obj.orElseThrow(()-> new ControllerNotFoundException("Nenhum Registro encontrado"));
		return new CompanyDTO(entity);
	}

}
