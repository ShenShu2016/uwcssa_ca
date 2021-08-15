from rest_auth.serializers import LoginSerializer


class CustomLoginSerializer(LoginSerializer):  # 继承，我们就不需要改别的东西啦
    username = None