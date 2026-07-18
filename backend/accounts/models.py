from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Role(models.TextChoices):
        STUDENT = "student", "Student"
        TEACHER = "teacher", "Teacher"
        RESEARCHER = "researcher", "Researcher"
        MENTOR = "mentor", "Mentor"
        INSTITUTION_ADMIN = "institution_admin", "Institution Administrator"
        PLATFORM_ADMIN = "platform_admin", "Platform Administrator"

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=30,
        choices=Role.choices,
        default=Role.STUDENT,
        db_index=True,
    )

    institution_name = models.CharField(
        max_length=255,
        blank=True,
    )

    is_verified = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.email or self.username
