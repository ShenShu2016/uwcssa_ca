from rest_framework import serializers
from users.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'email',
            'username',
            'first_name',
            'last_name',
            'last_login',
            'start_date',
            'about',
            'email_uwindsor',
            'is_uwcssa',
            'major',
            'enroll_date',
            'graduate_date',
            'avatar',
            'signature',
            'location',
            'website',
            'company',
            'role',
            'balance',
            'reputation',
            'twitter',
            'github',
        )
        read_only_fields = (
            'start_date',
            'is_superuser',
            'last_login',
            'is_active',
            'is_staff',
            'is_uwcssa',
        )
