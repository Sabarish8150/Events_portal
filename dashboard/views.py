from django.shortcuts import render
from django.http import HttpResponse
from .models import Event
# Create your views here.
def dashboard(request):
    events = Event.objects.all()
    return render(request, 'index.html', {'events': events})

def ira(request):
    return render(request,'ira.html')

def e_register(request):
    return render(request,'e_register.html')

def logout(request):
    return render(request,'login.html')