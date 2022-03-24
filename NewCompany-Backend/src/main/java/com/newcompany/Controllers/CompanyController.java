package com.newcompany.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newcompany.dto.CompanyDTO;
import com.newcompany.services.CompanyService;

@RestController
@RequestMapping(value = "/company")
public class CompanyController {
	
	
	@Autowired
	private CompanyService service;
	
	
	@GetMapping(value = "/listcompany")
	public ResponseEntity<List<CompanyDTO>> finAll() {
		List<CompanyDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);

	}
}
