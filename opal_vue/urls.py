from django.urls import path
from django.views.generic import TemplateView
from . import views

from django.contrib import admin
admin.autodiscover()


urlpatterns = [
    path(
        "", TemplateView.as_view(template_name="opal_vue/vue_base.html"), name="app",
    ),
    path(
        "add-patient", views.AddPatient.as_view()
    ),
]
