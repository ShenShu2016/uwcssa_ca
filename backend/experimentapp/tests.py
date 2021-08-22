from django.test import TestCase

# Create your tests here.

class URLTests(TestCase):
    def test_testhomepage(self):
        respone = self.client.get('/')
        self.assertEqual(respone.status_code, 404)