package eu.dani24.bob.contact;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ContactsMapper {

    @Mapping(target = "uuid", ignore = true) // Ignore uuid during mapping")
    void toEntity(ContactDto dto, @MappingTarget Contact contact);

    ContactDto toDto(Contact entity);
}