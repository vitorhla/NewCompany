package com.newcompany.dto;

import java.io.Serializable;

import com.newcompany.entities.Company;

public class CompanyDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String razaoSocial;
	private String nomeFantasia;
	private String cnpj;

	public CompanyDTO() {

	}

	public CompanyDTO(Long id, String razaoSocial, String nomeFantasia, String cnpj) {
		this.id = id;
		this.razaoSocial = razaoSocial;
		this.nomeFantasia = nomeFantasia;
		this.cnpj = cnpj;
	}

	
	public CompanyDTO(Company entity) {
		this.id = entity.getId();
		this.razaoSocial = entity.getRazaoSocial();
		this.nomeFantasia = entity.getNomeFantasia();
		this.cnpj = entity.getCnpj();
		
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

}
