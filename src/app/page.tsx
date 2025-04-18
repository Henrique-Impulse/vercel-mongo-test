'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          metadata: {
            source: 'web',
            timestamp: new Date().toISOString(),
          },
        }),
      });

      if (response.ok) {
        setStatus('Log enviado com sucesso!');
        setMessage('');
      } else {
        setStatus('Erro ao enviar log');
      }
    } catch (error) {
      setStatus('Erro ao enviar log');
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sistema de Logs</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar Log
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm">
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
