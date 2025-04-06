from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.
def dashboard(request):
    events = Event.objects.all()
    return render(request, 'index.html', {'events': events})

def ira(request):
    pending_assessments = Assessment.objects.filter(status="Pending")
    completed_assessments = Assessment.objects.filter(status="Completed")
    
    return render(request, 'ira.html', {
        'pending_assessments': pending_assessments,
        'completed_assessments': completed_assessments
    })

def e_register(request):
    events = Event.objects.all()  # Fetch all events from the database
    return render(request, 'e_register.html', {'events': events})


def logout(request):
    return render(request,'login.html')