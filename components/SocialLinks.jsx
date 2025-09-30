import Link from 'next/link';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-4">
      <Link href="https://facebook.com" target="_blank" className="text-blue-600 hover:underline">
        Facebook
      </Link>
      <Link href="https://instagram.com" target="_blank" className="text-pink-600 hover:underline">
        Instagram
      </Link>
      <Link href="https://whatsapp.com" target="_blank" className="text-green-600 hover:underline">
        WhatsApp
      </Link>
    </div>
  );
}
