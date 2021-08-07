from django.db import models
from users.models import CustomUser
# Create your models here.

# null default = True
# unique default= False
# reference: https://blog.csdn.net/qq_39208536/article/details/103761445


def upload_to(instance, filename):
    return 'post/{filename}'.format(filename=filename)


class Topic(models.Model):
    topic = models.CharField(max_length=255, unique=True)
    # auto_now_add，默认值为false，设置为true时，会在model对象第一次被创建时，将字段的值设置为创建时的时间，以后修改对象时，字段的值不会再更新。
    # updated_at = models.DateTimeField(auto_now_add=True)
    # will use User model later
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(CustomUser,
                                   null=False,
                                   on_delete=models.CASCADE)

    def __str__(self):
        return self.topic

    class Meta:
        db_table = 'topic'
        ordering = ['id']


class Article(models.Model):

    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    subject = models.CharField(max_length=255)
    content = models.TextField(max_length=4000, null=True)

    image = models.ImageField(upload_to=upload_to,
                              default='posts/default.jpg')  # new

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    # will use User model later
    created_by = models.ForeignKey(CustomUser,
                                   null=False,
                                   on_delete=models.CASCADE)
    updated_by = models.ForeignKey(CustomUser,
                                   null=True,
                                   on_delete=models.CASCADE,
                                   related_name='+')

    def __str__(self):
        return self.subject

    class Meta:
        db_table = 'article'
        ordering = ['id']
