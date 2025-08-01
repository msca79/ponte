package eu.dani24.bob.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/contacts", produces = MediaType.APPLICATION_JSON_VALUE)
public class ContactsApi {

    @Autowired
    ContactsRepository contactRepository;
    @Autowired
    ContactsMapper mapper;

    @PostMapping("/")
    public ContactDto save(@RequestBody ContactDto contactDto) {
        
        Contact contact;
        if (contactDto.getUuid() != null) {
            contact = contactRepository.findByUuid(contactDto.getUuid());
        } else {
            contact = new Contact();
            contact.setUuid(contactDto.getUuid());
        }

        mapper.toEntity(contactDto, contact);

        contactRepository.save(contact);

        return mapper.toDto(contact);
    }

    @GetMapping("/")
    public Page<Contact> list(Pageable pageable) {
        return contactRepository.findAll(pageable);
    }

    @GetMapping("/{uuid}")
    public Contact get(@PathVariable String uuid) {
        return contactRepository.findByUuid(uuid);
    }
}