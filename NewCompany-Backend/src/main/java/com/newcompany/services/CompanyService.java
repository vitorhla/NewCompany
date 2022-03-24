package com.newcompany.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.newcompany.dto.CompanyDTO;
import com.newcompany.entities.Company;
import com.newcompany.repositories.CompanyRepository;
import com.newcompany.services.exceptions.ControllerNotFoundException;
import com.newcompany.services.exceptions.DatabaseException;

@Service
public class CompanyService {

	@Autowired
	private CompanyRepository repository;

	@Transactional(readOnly = true)
	public Page<CompanyDTO> findAllPaged(PageRequest pageRequest) {
		Page<Company> list = repository.findAll(pageRequest);
		return list.map(x -> new CompanyDTO(x));
	}

	@Transactional(readOnly = true)
	public CompanyDTO findByIdCompany(Long id) {
		Optional<Company> obj =  repository.findById(id);
		Company entity = obj.orElseThrow(()-> new ControllerNotFoundException("Nenhum Registro encontrado"));
		return new CompanyDTO(entity);
	}
	
	
	@Transactional
	public CompanyDTO insertNewCompany(CompanyDTO dto) {
		Company entity = new Company();
		
		entity.setCnpj(dto.getCnpj());
		entity.setNomeFantasia(dto.getNomeFantasia());
		entity.setRazaoSocial(dto.getRazaoSocial());
		entity.setEndereco(dto.getEndereco());
		entity.setNumero(dto.getNumero());
		entity.setCidade(dto.getCidade());
		entity.setEstado(dto.getEstado());
		
		entity = repository.save(entity);
		return new  CompanyDTO(entity);
			
	}
	
	
	@Transactional
	public CompanyDTO updateCompany(Long id, CompanyDTO dto) {
		
		try {
		@SuppressWarnings("deprecation")
		Company entity = repository.getOne(id);
		
		
		 String razaoSocialEditing = "";
		 String nomeFantasiaEditing = "";
		 String cnpjEditing = "";
		 String enderecoEditing = "";
		 String numeroEditing = "";
		 String cidadeEditing = "";
		 String estadoEditing = "";
		 
		 razaoSocialEditing = dto.getRazaoSocial();
		 if(!razaoSocialEditing.equals("")) {
			 entity.setRazaoSocial(razaoSocialEditing);
		 }
		 
		 nomeFantasiaEditing = dto.getNomeFantasia();
		 if(!nomeFantasiaEditing.equals("")) {
			 entity.setNomeFantasia(nomeFantasiaEditing);
		 }
		 
		 cnpjEditing = dto.getCnpj();
		 if(!cnpjEditing.equals("")) {
			 entity.setCnpj(cnpjEditing); 
		 }
		 
		 enderecoEditing =  dto.getEndereco();
		 if(!enderecoEditing.equals("")) {
			 entity.setEndereco(enderecoEditing);
			 
		 }
		 
		 numeroEditing =  dto.getNumero();
		 if(!numeroEditing.equals("")) {
			 entity.setNumero(numeroEditing); 
		 }
		 
		 cidadeEditing =  dto.getCidade();
		 if(!cidadeEditing.equals("")) {
			 entity.setCidade(cidadeEditing);	 
		 }
		 
		 estadoEditing =  dto.getEstado();
		 if(!estadoEditing.equals("")) {
			 entity.setEstado(estadoEditing);	 
		 }
		
		 entity = repository.save(entity);
	     return new CompanyDTO(entity);
		  
	
	}catch(EntityNotFoundException e ) {
		throw new ControllerNotFoundException("Id não Encontrado " + id);
	}
		
	
	}

	public void deleteCompany(Long id) {
		try {
		repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e ) {
			throw new ControllerNotFoundException("Id não Encontrado " + id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de Integridade");
		}
	}
		
	

	
}
