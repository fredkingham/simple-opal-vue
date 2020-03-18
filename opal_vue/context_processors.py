import json
from opal.core import schemas
from opal.core.serialization import OpalSerializer
from django.utils.safestring import mark_safe


def schema(request):
    return {
        "schema": mark_safe(json.dumps(schemas.list_records(), cls=OpalSerializer))
    }
