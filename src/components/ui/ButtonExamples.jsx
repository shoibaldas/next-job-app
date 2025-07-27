import React from 'react';
import Button from './Button';
import { 
  FiPlus, 
  FiSearch, 
  FiHeart, 
  FiDownload, 
  FiMail, 
  FiSettings,
  FiArrowRight,
  FiTrash2,
  FiCheck,
  FiX
} from 'react-icons/fi';

const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Button Component Examples</h1>
      
      {/* Basic Variants */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
        </div>
      </section>

      {/* Button Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button icon={<FiPlus />} iconPosition="left">
            Add Item
          </Button>
          <Button icon={<FiArrowRight />} iconPosition="right">
            Continue
          </Button>
          <Button icon={<FiDownload />} variant="secondary">
            Download
          </Button>
          <Button icon={<FiMail />} variant="outline">
            Send Email
          </Button>
        </div>
      </section>

      {/* Icon Only Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Icon Only Buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button icon={<FiSearch />} iconOnly size="sm" />
          <Button icon={<FiSettings />} iconOnly size="md" />
          <Button icon={<FiHeart />} iconOnly size="lg" variant="outline" />
          <Button icon={<FiTrash2 />} iconOnly size="md" variant="danger" />
          <Button icon={<FiCheck />} iconOnly size="md" variant="success" />
          <Button icon={<FiX />} iconOnly size="md" variant="ghost" />
        </div>
      </section>

      {/* Loading States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading Button</Button>
          <Button loading icon={<FiDownload />}>
            Downloading...
          </Button>
          <Button loading iconOnly icon={<FiSettings />} />
        </div>
      </section>

      {/* Disabled States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Disabled States</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button disabled icon={<FiPlus />}>
            Disabled with Icon
          </Button>
          <Button disabled iconOnly icon={<FiSearch />} />
        </div>
      </section>

      {/* Different Variants with Icons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Variants with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" icon={<FiPlus />}>
            Add New
          </Button>
          <Button variant="secondary" icon={<FiDownload />}>
            Download File
          </Button>
          <Button variant="outline" icon={<FiMail />}>
            Contact Us
          </Button>
          <Button variant="ghost" icon={<FiSettings />}>
            Settings
          </Button>
          <Button variant="danger" icon={<FiTrash2 />}>
            Delete Item
          </Button>
          <Button variant="success" icon={<FiCheck />}>
            Confirm Action
          </Button>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Real-world Examples</h2>
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
            />
            <Button icon={<FiSearch />} iconOnly />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="primary" icon={<FiPlus />}>
              Create New
            </Button>
            <Button variant="outline" icon={<FiDownload />}>
              Export
            </Button>
            <Button variant="ghost" icon={<FiSettings />}>
              Settings
            </Button>
          </div>

          {/* Card Actions */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Card Title</h3>
            <p className="text-gray-600 mb-4">Card description goes here...</p>
            <div className="flex gap-2">
              <Button size="sm" variant="primary" icon={<FiHeart />}>
                Like
              </Button>
              <Button size="sm" variant="outline" icon={<FiMail />}>
                Share
              </Button>
              <Button size="sm" variant="ghost" icon={<FiSettings />} iconOnly />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples; 