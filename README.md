This is opal_example_app - an [Opal](https://github.com/openhealthcare/opal) project.

To get started, run the following commands:

```
    python manage.py migrate
    python manage.py runserver
```

Aims are...

all of opal components get imported

so we don't want the router stuff
we want...

what do forms look like?

I want to just be able to include a form
and a demo form and a to redirect

something that looks like

Add Patient
<patient_form>
    <demographics_form></demographics_form>
    <multipe_form>
        <treatment_form></treatment_form>
    </multipe_form>
</patient_form>

Record panel
<panel model="demographics"></panel>

the modals initial data get's injected by vue. Job's a good'un and we post back




And then at the bottom of the page we
initialise the Vue instance with the patient and the schema


TODO
1. We need a new app done
2. We need to be able to post a patient form
3. We need to display a patient detail
4. We need modals to work
5. We need a patient list# simple-opal-vue
