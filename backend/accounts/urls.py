from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import CustomTokenObtainPairView, RegisterView, UserMeView

app_name = "accounts"

urlpatterns = [
    path("register/", RegisterView.as_view(), name="auth_register"),
    path("login/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("me/", UserMeView.as_view(), name="auth_me"),
]
