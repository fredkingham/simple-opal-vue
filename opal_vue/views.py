from django.views.generic import CreateView, TemplateView


class AddPatient(TemplateView):
    template_name = "opal_vue/add_patient.html"