const BookingForm = () => {
  return (
    <form className="form">
      <label for="bookingInfo">Information</label>
      <input type="text" name="bookingInfo" />
      <label for="email">Email</label>
      <input type="email" name="email" />
    </form>
  );
};

export default BookingForm;
