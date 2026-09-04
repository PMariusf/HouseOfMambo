"use client";

import { FormEvent, useState } from "react";

const bookingTypes = [
    "VIP table",
    "Club Mambo",
    "Salsa night",
    "Masterclass",
    "Private coaching",
    "Other inquiry",
];

const bookingTimes = ["18:30", "20:00", "21:30", "22:30", "23:30"];

export default function ReservationForm() {
    const [showPreviewNotice, setShowPreviewNotice] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setShowPreviewNotice(true);
    }

    return (
        <form onSubmit={handleSubmit} className="border border-white/8 bg-[#202020] p-5 m:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="fullName">Full name</label>
                    <input className="form-control" id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="Your full name" />
                </div>

                <div>
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="form-control" id="email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
                </div>

                <div>
                    <label className="form-label" htmlFor="phone">Phone number</label>
                    <input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+47 000 00 000" />
                </div>

                <div>
                    <label className="form-label" htmlFor="bookingType">Booking type</label>
                    <select className="form-control" id="bookingType" name="bookingType" required defaultValue="">
                        <option value="" disabled>Select an experience</option>
                        {bookingTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>

                <div>
                    <label className="form-label" htmlFor="guests">Number of guests</label>
                    <input className="form-control" id="guests" name="guests" type="number" inputMode="numeric" min="1" max="20" required defaultValue="2" />
                </div>

                <div>
                    <label className="form-label" htmlFor="bookingDate">Requested date</label>
                    <input className="form-control" id="bookingDate" name="bookingDate" type="date" required />
                </div>

                <div>
                    <label className="form-label" htmlFor="bookingTime">Preferred time</label>
                    <select className="form-control" id="bookingTime" name="bookingTime" required defaultValue="">
                        <option value="" disabled>Select a time</option>
                        {bookingTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label className="form-label" htmlFor="message">Message or special requests</label>
                    <textarea className="form-control min-h-32 resize-y" id="message" name="message" placeholder="Tell us about your evening, occasion, or accessibility needs." />
                </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-text-main/55">
                <input className="mt-1 size-4 shrink-0 accent-gold-main" name="consent" type="checkbox" required />
                <span>I agree that House of Mambo may use these details to contact me about this booking request.</span>
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="btn-primary min-h-12" type="submit">Request reservation</button>
                <p className="text-xs leading-5 text-text-main/35">A reservation is confirmed only after you receive a reply from House of Mambo.</p>
            </div>

            {showPreviewNotice && (
                <div className="mt-6 border border-gold-main/30 bg-gold-main/8 p-4 text-sm leading-6 text-gold-champagne" role="status" aria-live="polite">
                    The reservation form is ready. No information was sent because the Google Form connection will be added later.
                </div>
            )}
        </form>
    );
}
