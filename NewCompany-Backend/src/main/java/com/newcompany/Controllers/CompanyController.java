package com.newcompany.Controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.newcompany.dto.CompanyDTO;
import com.newcompany.services.CompanyService;

@RestController
@RequestMapping(value = "/company")
public class CompanyController {

	@Autowired
	private CompanyService service;

	@GetMapping
	public ResponseEntity<List<CompanyDTO>> findAll() {
		List<CompanyDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<CompanyDTO> finByIdCompany(@PathVariable Long id) {
		CompanyDTO dto = service.findByIdCompany(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<CompanyDTO> insertNewcompany(@RequestBody  CompanyDTO dto){
		
		dto = service.insertNewCompany(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping (value = "/editCompany/{id}")
	public ResponseEntity<CompanyDTO> updateCompany(@PathVariable Long id, @RequestBody CompanyDTO dto){
		
		dto = service.updateCompany(id, dto);
		return ResponseEntity.ok().body(dto);	
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteCompany(@PathVariable Long id){
		
		 service.deleteCompany(id);
		return ResponseEntity.noContent().build();
		
		
		
	}
	
	
	
}
