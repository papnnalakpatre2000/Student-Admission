package com.fileupload.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class PdfDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    private String name;

    @Lob
    private byte[] content;

    private String last;
    
    public PdfDocument() {
		super();
	}

	public PdfDocument(Long id, String name, byte[] content, String last) {
		super();
		this.id = id;
		this.name = name;
		this.content = content;
		this.last=last;
	}
    

	public String getLast() {
		return last;
	}

	public void setLast(String last) {
		this.last = last;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getContent() {
		return content;
	}

	public void setContent(byte[] content) {
		this.content = content;
	}

	
	
	
	
    

	

    // getters and setters
}