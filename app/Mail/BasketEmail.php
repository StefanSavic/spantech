<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BasketEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }
    
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        $address = 'doe@example.com';
        $subject = 'New Enquiry Request';
        $name ='Jane Doe';

        return $this->markdown('emails.basket')
                    ->from($address,$name)
                    ->cc($address,$name)
                    ->bcc($address,$name)
                    ->ReplyTo($address,$name)
                    ->Subject($subject)
                    ->with(['data' => $this->data]);
    }
}
