package com.newcompany.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newcompany.entities.Company;

@RestController
@RequestMapping(value= "/company")
public class CompanyController {
	
		@GetMapping(value ="/listcompany")
		public ResponseEntity<List<Company>> finAll(){
			List<Company> list = new ArrayList<>();
			list.add(new Company(1L,"Empresa A","A","123"));
			list.add(new Company(2L,"Empresa A","A","123"));
			return ResponseEntity.ok().body(list);
	
}
}
