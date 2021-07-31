from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _  # 用来翻译的东西
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.


class CustomAccountManager(BaseUserManager):  # 继承 BaseUserManager

    def create_superuser(self, email, username, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, first_name, password, **other_fields)

    def create_user(self, email, username, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    # False 是为了以后用来验证 改成True 是因为 报错 Reference： https://githubmemory.com/repo/iMerica/dj-rest-auth/issues/264
    is_active = models.BooleanField(default=True)
    objects = CustomAccountManager()  # 使用上面提供的自定义accountmanager

    USERNAME_FIELD = 'email'  # 让email变成登录名
    REQUIRED_FIELDS = ['username', 'first_name']  # 必须填写的地方

    major = models.CharField(max_length=200, null=True, blank=True)  # 专业
    enroll_date = models.DateField(null=True, blank=True)  # 入学时间
    graduate_date = models.DateField(null=True, blank=True)  # 毕业时间

    avatar = models.CharField(max_length=200, null=True, blank=True)    # 头像 地址
    signature = models.CharField(max_length=500, null=True, blank=True)  # 签名
    location = models.CharField(max_length=200, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    company = models.CharField(max_length=200, null=True, blank=True)
    role = models.IntegerField(null=True, blank=True)                   # 角色
    balance = models.IntegerField(null=True, blank=True)                # 余额
    reputation = models.IntegerField(null=True, blank=True)             # 声誉
    self_intro = models.CharField(
        max_length=500, null=True, blank=True)  # 自我介绍
    updated = models.DateTimeField(null=True, blank=True)
    twitter = models.CharField(max_length=200, null=True, blank=True)
    github = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.username
