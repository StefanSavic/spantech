{{-- Header --}}


@component('mail::message')


Greeting Sanjay, 

you have new order submited:


<h2>From:</h2>

<div><strong>Name:</strong><span>{{$data[1]['name']}}</span></div>
<div><strong>Last Name:</strong><span>{{ $data[1]['lastName'] }}</span></div>
<div><strong>Email:</strong><span>{{$data[1]['email']}}</span></div>

@component('mail::table')
| Sensor Name                     | Gas                       | Type                  | Source                        |  Quantity                     |
| :-----------------------------: |:-------------------------:| :-------------------: |:-----------------------------:| :---------------------------: |
@foreach ($data[0] as $sensor)
| {{ $sensor['productName'] }}    | {{ $sensor['gas'] }}      | {{ $sensor['type'] }} |   {{ $sensor['details'] }}    | {{ $sensor['ordNum'] }}       |
@endforeach

<h2>Enquiry</h2>

<p>{{$data[2]['enquiry']}}</p>

@endcomponent   
{{ config('app.name') }}    
@endcomponent
