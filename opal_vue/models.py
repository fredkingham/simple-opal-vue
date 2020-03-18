"""
opal_vue models.
"""
from django.db.models import fields

from opal import models

"""
Core Opal models - these inherit from the abstract data models in
opal.models but can be customised here with extra / altered fields.
"""
models.Subrecord.get_form_url = lambda: None
class NoFormUrl(object):
    @classmethod
    def get_form_url(cls, *args, **kwargs):
        pass


class Demographics(NoFormUrl, models.Demographics): pass
class Location(NoFormUrl, models.Location): pass
class Allergies(NoFormUrl, models.Allergies): pass
class Diagnosis(NoFormUrl, models.Diagnosis): pass
class PastMedicalHistory(NoFormUrl, models.PastMedicalHistory): pass
class Treatment(NoFormUrl, models.Treatment): pass
class Investigation(NoFormUrl, models.Investigation): pass
class SymptomComplex(NoFormUrl, models.SymptomComplex): pass
class PatientConsultation(NoFormUrl, models.PatientConsultation): pass

# we commonly need a referral route, ie how the patient
# came to the service, but not always.
# class ReferralRoute(models.ReferralRoute): pass

"""
End Opal core models
"""