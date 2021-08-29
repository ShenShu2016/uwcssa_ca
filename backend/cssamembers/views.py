from django.shortcuts import render
import datetime
update_date = datetime.datetime.now()


# Create your views here.
def main(request):
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    context = {'num_visits': num_visits,
               "update_date": update_date,
               }
    return render(request, "main/index.html", context=context)

def cssa_members(request):

    return render(request, "cssa_members/index.html", )