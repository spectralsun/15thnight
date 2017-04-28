def CurrentUserResource(user):
    if not user.is_authenticated:
        return None
    return dict(
        name=user.name,
        organization=user.organization,
        email=user.email,
        role=user.role,
        phone_number=user.phone_number,
        created_at=user.created_at,
        services=map(CurrentUserServiceResource, user.services)
    )

def CurrentUserServiceResource(service):
    return dict(name=service.name, id=service.id)
