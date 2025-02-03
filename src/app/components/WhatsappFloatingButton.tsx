import Image from 'next/image';
import Link from 'next/link';

export default function WhatsappFloatingButton() {
    return (
        <Link
            href="https://wa.me/5517997881068?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            className="fixed bottom-4 right-4 z-50"
        >
            <div className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                    src="/WhatsApp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                />
            </div>
        </Link>
    );
}
