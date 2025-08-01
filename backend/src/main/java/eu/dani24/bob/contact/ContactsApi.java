package eu.dani24.bob.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/contacts")
public class ContactsApi {

    @Autowired
    ContactsRepository contactRepository;
    @Autowired
    ContactsMapper mapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactDto createContact(@RequestBody ContactDto contactDto) {

        Contact contact = contactRepository.findByUuid(contactDto.getUuid());
        if (contact == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact not found");
        }  

        mapper.toEntity(contactDto,contact);

        contactRepository.save(contact);

        return mapper.toDto(contact);
    }

    
    @GetMapping("/list")
    public Page<Contact> listContacts(Pageable pageable) {
        return contactRepository.findAll(pageable);
    }
}