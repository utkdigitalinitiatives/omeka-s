<?php
namespace Omeka\Installation\Task;

use Doctrine\DBAL\DBALException;
use Omeka\Installation\Installer;

/**
 * Task to initialize the migrations table with all existing migrations.
 */
class RecordMigrationsTask implements TaskInterface
{
    public function perform(Installer $installer)
    {
        $migrator = $installer->getServiceLocator()->get('Omeka\MigrationManager');
        $conn = $installer->getServiceLocator()->get('Omeka\Connection');

        $migrations = $migrator->getAvailableMigrations();

        $conn->beginTransaction();
        foreach ($migrations as $version => $data) {
            $migrator->recordMigration($version);
        }
        $conn->commit();
    }
}
