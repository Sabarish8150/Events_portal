from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def dashboard(request):
    return render(request,'html/index.html')
def ira(request):
    pass
def events_registered(request):
    pass
def logout(request):
    pass