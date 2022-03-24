package com.newcompany.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newcompany.dto.CompanyDTO;
import com.newcompany.services.CompanyService;
import com.newcompany.services.exceptions.ControllerNotFoundException;

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

}
