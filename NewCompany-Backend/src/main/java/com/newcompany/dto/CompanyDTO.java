package com.newcompany.dto;

import java.io.Serializable;

import javax.persistence.Column;

import com.newcompany.entities.Company;

public class CompanyDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String razaoSocial;
	private String nomeFantasia;
	private String cnpj;
	private String endereco;
	private String numero;
	private String cidade;
	private String estado;
	
	

	public CompanyDTO() {

	}
	
	public CompanyDTO(Long id, String razaoSocial, String nomeFantasia, String cnpj, String endereco, String numero,
			String cidade, String estado) {
		super();
		this.id = id;
		this.razaoSocial = razaoSocial;
		this.nomeFantasia = nomeFantasia;
		this.cnpj = cnpj;
		this.endereco = endereco;
		this.numero = numero;
		this.cidade = cidade;
		this.estado = estado;
	}




	public CompanyDTO(Company entity) {
		this.id = entity.getId();
		this.razaoSocial = entity.getRazaoSocial();
		this.nomeFantasia = entity.getNomeFantasia();
		this.cnpj = entity.getCnpj();
		this.endereco = entity.getEndereco();
		this.numero = entity.getNumero();
		this.cidade = entity.getCidade();
		this.estado = entity.getEstado();
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

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
	
	
	

}
