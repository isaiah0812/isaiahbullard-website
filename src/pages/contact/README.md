# Contact Page (zaemadethis.com/contact)

## Overview
The Contact Page contains a form, which on submission, sends an email to Isaiah Bullard. The form uses [EmailJS](https://github.com/isaiah0812/isaiahbullard-website#emailjs) to send the email over SMTP. The form submits two different versions of the email: one for buying beats and one for not buying beats. To inquire about a beat purchase, the user will select the field labeled "I'm purchasing a beat", and select the beat(s) that they intend to purchase.

### Fields
#### `Your Name`
A text input for the name of the sender.

#### `Email Address`
A text input for the email address of the sender.

#### `I'm purchasing a beat`
A checkbox indicating whether or not the sender would like to purchase a beat from Isaiah Bullard. If this box is selected, it shows all of the beats from the [Beats Page](../beats/README.md), including all of the beats from the Beat Tapes.

#### `Select Beats to Purchase`
A select input, listing all of the beats from the [Beats Page](../beats/README.md), including all of the beats from the Beat Tapes. When one is selected, a [`BeatCard`](#beat-cards) is displayed under the input field, and the selected beat is removed from the list displayed inside of the input field.

#### `State Your Business`
A text box where the sender will enter their message to Isaiah Bullard.

---
## Beat Cards
When a beat is selected in the contact form, a `BeatCard` appears below the [`Select Beats to Purchase`](#select-beats-to-purchase) input field. The beat is also removed from the list that populates this input field. When the `BeatCard` is clicked, it is removed from the form, and the beat is added back to the list populating the input field. The card only displays the cover art for the beat and the title.