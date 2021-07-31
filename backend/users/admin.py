from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea


# class UserAdminConfig(UserAdmin):  # 用来把我们自定义的 NewUser 弄到 admin 里面去
#     model = CustomUser
#     search_fields = ('email', 'user_name', 'first_name',)
#     list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
#     ordering = ('-start_date',)  # 从最新的order 正负可以 desc asc
#     list_display = ('email', 'user_name', 'first_name',
#                     'is_active', 'is_staff')  # 能看到的columns 的内容
#     fieldsets = (
#         (None, {'fields': ('email', 'user_name', 'first_name',)}),
#         ('Permissions', {'fields': ('is_staff', 'is_active')}),
#         ('Personal', {'fields': ('about',)}),
#     )
#     formfield_overrides = {
#         CustomUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
#     }  # update 的时候的ui，用来dmin里面的ui好不好看
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}
#          ),
#     )  # 用来 add 的时候的ui


class UserAdminConfig(admin.ModelAdmin):  # 这个是有内置的admin 功能较多

    search_fields = ('email', 'user_name', 'first_name',)
    list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)  # 从最新的order 正负可以 desc asc
    list_display = ('email', 'user_name', 'first_name',
                    'is_active', 'is_staff')  # 能看到的columns 的内容


admin.site.register(CustomUser, UserAdminConfig)
