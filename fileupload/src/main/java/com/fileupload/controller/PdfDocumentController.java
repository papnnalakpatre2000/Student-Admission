package com.fileupload.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fileupload.PdfDocumentRepository;
import com.fileupload.entity.PdfDocument;

@CrossOrigin
@RestController
@RequestMapping("/documents")
public class PdfDocumentController {
    @Autowired
    private PdfDocumentRepository pdfDocumentRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadPdf(@RequestParam("file") MultipartFile file,@RequestParam("last") String last) {
//    	
        try {
            PdfDocument pdfDocument = new PdfDocument();
            pdfDocument.setName(file.getOriginalFilename());
            pdfDocument.setContent(file.getBytes());
//			pdfDocument.setAge(age);
			pdfDocument.setLast(last);
            
            pdfDocumentRepository.save(pdfDocument);
            return ResponseEntity.ok("File uploaded successfully!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getPdf(@PathVariable Long id) {
        Optional<PdfDocument> optionalPdfDocument = pdfDocumentRepository.findById(id);
        if (optionalPdfDocument.isPresent()) {
            PdfDocument pdfDocument = optionalPdfDocument.get();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + pdfDocument.getName() + "\"")
                    .body(pdfDocument.getContent());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
//    
//    @GetMapping("/download/{id}")
//    public ResponseEntity<Map<String, Object>> downloadPdf(@PathVariable Long id) {
//        Optional<PdfDocument> pdfDocumentOptional = pdfDocumentRepository.findById(id);
//        if (pdfDocumentOptional.isPresent()) {
//            PdfDocument pdfDocument = pdfDocumentOptional.get();
//            byte[] resource = pdfDocument.getContent();
//            
//            HttpHeaders headers = new HttpHeaders();
//            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=pdf_document.pdf");
//            
//            Map<String, Object> response = new HashMap<>();
//            response.put("pdfData", resource);
//            response.put("jsonData", pdfDocument.getLast()); // Add JSON data to the response
//
//            return ResponseEntity.ok()
//                    .headers(headers)
//                    .contentLength(pdfDocument.getContent().length)
//                    .contentType(MediaType.APPLICATION_PDF)
//                    .body(response);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }
    
//    @GetMapping("/{id}")
//  public ResponseEntity<PdfDocument> getPdf(@PathVariable Long id) {
//      Optional<PdfDocument> optionalPdfDocument = pdfDocumentRepository.findById(id);
//      if (optionalPdfDocument.isPresent()) {
//          PdfDocument pdfDocument = optionalPdfDocument.get();
//          return ResponseEntity.ok()
//                  .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + pdfDocument.getName() + "\"")
//                  .body(pdfDocument);
//      } else {
//          return ResponseEntity.notFound().build();
//      }
//  }
    @GetMapping("/getall")
    public ResponseEntity<List<PdfDocument>> getAll(){
    	return ResponseEntity.ok().body(pdfDocumentRepository.findAll());
    }
}