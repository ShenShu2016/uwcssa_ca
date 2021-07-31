from django.db import models

# Create your models here.


# null default = True
# unique default= False
# reference: https://blog.csdn.net/qq_39208536/article/details/103761445

class Topic(models.Model):
    topic = models.CharField(max_length=255)
    # auto_now_add，默认值为false，设置为true时，会在model对象第一次被创建时，将字段的值设置为创建时的时间，以后修改对象时，字段的值不会再更新。
    last_updated = models.DateTimeField(auto_now_add=True)
    # will use User model later
    starter = models.CharField(max_length=64, null=False)

    def __str__(self):
        return self.topic

    class Meta:
        db_table = 'topic'
        ordering = ['id']


class Article(models.Model):

    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    subject = models.CharField(max_length=255)
    content = models.TextField(max_length=4000, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    # will use User model later
    created_by = models.CharField(max_length=64, null=False)
    updated_by = models.CharField(max_length=64, null=False)

    def __str__(self):
        return self.subject

    class Meta:
        db_table = 'article'
        ordering = ['id']
