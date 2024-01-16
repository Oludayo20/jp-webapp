import emailjs from 'emailjs-com';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const saveSubscribers = async (user) => {
  console.log(user);

  try {
    const docRef = await addDoc(collection(db, 'subscribers'), {
      user
    });

    const templateParams = {
      from_name: 'JP Church',
      from_email: 'JP@gmail.com',
      to_email: user.email,
      to_name: user.name,
      message: 'Welcome to Joshep Palace.'
    };

    await emailjs.send(
      'service_ip0pxj7',
      'template_1slt19j',
      templateParams,
      'a1dAn4lDK_t8i6vlG'
    );

    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error subscribing:', error);
  }
};
