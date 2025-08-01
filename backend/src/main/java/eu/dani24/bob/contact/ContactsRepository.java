package eu.dani24.bob.contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactsRepository extends JpaRepository<Contact, Long>{

    Contact findByUuid(String uuid);
  
}
